import DefaultPage from "../../components/DefaultPage";
import World from "../../components/World";
import arionImageUrl from "../../assets/elaria/arion.jpg";
import thaliaImageUrl from "../../assets/elaria/thalia.jpg";
import kaelImageUrl from "../../assets/elaria/kael.jpg";

export default function Home() {
  const worlds = [
    {
      title: "Elaria - The Shattered Realms",
      history:
        "Elaria was once a unified world, a grand empire where magic flowed freely and technological marvels flourished. However, a cataclysmic event known as the Shattering splintered the realm into floating islands and divided it into three distinct environments: the Arcane Spires, the Verdant Wilds, and the Shadowlands. These realms hover in the sky, connected by ancient portals and traversable by airships.",
      characters: [
        {
          name: "Arion Valeran",
          description:
            "A brilliant technomancer hailing from the Arcane Spires, a realm where magic and technology intertwine.",
          imageUrl: arionImageUrl,
          background:
            "Arion grew up among the soaring towers of the Arcane Spires, where he was trained in the art of technomancy from a young age. He combines magic and technology to create incredible devices.",
          race: "Human",
          class: "Technomancer",
          realm: "Arcane Spires",
          appearance:
            "Arion has a lean build, with bright blue eyes that spark with intelligence. He wears a combination of robes and mechanical gear, always ready for both magic and machinery.",
          personality:
            "Arion is curious and inventive, always looking for new ways to combine magic and technology. He is dedicated to advancing knowledge and often loses himself in his work.",
        },
        {
          name: "Thalia Greenshadow",
          description:
            "A devoted druid from the Verdant Wilds, a lush jungle teeming with mystical life, she is a guardian of nature.",
          imageUrl: thaliaImageUrl,
          background:
            "Thalia has spent her life in the Verdant Wilds, communicating with nature and protecting the balance of the ecosystem. She is deeply connected to the flora and fauna of her realm.",
          race: "Elf",
          class: "Druid",
          realm: "Verdant Wilds",
          appearance:
            "Thalia has a graceful, athletic build with green eyes that reflect the vibrancy of the jungle. She dresses in natural fabrics and carries a staff adorned with vines and flowers.",
          personality:
            "Thalia is calm and nurturing, with a deep respect for all living things. She is wise and patient, always seeking peaceful solutions but ready to defend nature when necessary.",
        },
        {
          name: "Kael Blackthorn",
          description:
            "A disciplined shadow monk from the Shadowlands, a realm shrouded in perpetual twilight and haunted by restless spirits.",
          imageUrl: kaelImageUrl,
          background:
            "Kael was orphaned and raised in a monastery in the Shadowlands, where he learned the ways of the shadow monk. He has trained rigorously to master the art of stealth and combat.",
          race: "Human",
          class: "Shadow Monk",
          realm: "Shadowlands",
          appearance:
            "Kael has a rugged, muscular build, with dark hair and eyes that seem to absorb light. He wears simple, dark clothing that allows for maximum mobility and stealth.",
          personality:
            "Kael is stoic and disciplined, shaped by the harsh realities of the Shadowlands. He is a man of few words, preferring action over talk, and is dedicated to protecting the living from the restless dead.",
        },
      ],
      ais: [
        {
          name: "GPT-4o",
          description: "Used to generate the history of Elaria and all of its characters."
        },
        {
          name: "Stable Diffusion",
          description: "Used to generate images of Elaria's characters."
        }
      ],
      initialWorldInfoVisible: true,
    },
  ];

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
      {worlds.map((world) => (
        <World key={world.title} {...world} />
      ))}
    </DefaultPage>
  );
}
