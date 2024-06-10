import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DefaultPage from "../../components/DefaultPage";
import World from "../../components/World";
import { IWorld } from "../../types";
import Spinner from "../../components/Spinner";
import Tabs from "../../components/Tabs";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  const { data, isLoading } = useQuery<{ worlds: IWorld[] }>({
    queryKey: [`worlds?language=${selectedLanguage}`, "GET"],
    retry: false,
  });

  return (
    <DefaultPage>
      <div className="py-8 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="lg:text-6xl text-4xl font-bold tracking-tight text-gray-900">
              Welcome to RPG Gallery
            </h1>
            <p className="mt-8 lg:text-lg text-base text-gray-600">
              A gallery of RPG worlds and characters made using artificial
              intelligence!
            </p>
          </div>
        </div>
      </div>
      <Tabs
        tabs={[
          { label: "English", value: "en" },
          { label: "Portuguese", value: "pt-br" },
        ]}
        selectedTab={selectedLanguage}
        onChange={(language) => setSelectedLanguage(language)}
      />
      {isLoading ? (
        <div className="py-8">
          <Spinner />
        </div>
      ) : (
        data?.worlds.map((world) => <World key={world.title} {...world} />)
      )}
    </DefaultPage>
  );
}
