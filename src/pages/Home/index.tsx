import DefaultPage from "../../components/DefaultPage";
import World from "../../components/World";
import seraphinaImageUrl from "../../assets/elysium/seraphina.gif";
import alaricImageUrl from "../../assets/elysium/alaric.gif";
import taliaImageUrl from "../../assets/elysium/talia.gif";
import akemiImageUrl from "../../assets/neo-recife/akemi.jpeg";
import jaxImageUrl from "../../assets/neo-recife/jax.jpeg";
import xartulImageUrl from "../../assets/neo-recife/xartul.jpeg";
import arionImageUrl from "../../assets/elaria/arion.jpg";
import thaliaImageUrl from "../../assets/elaria/thalia.jpg";
import kaelImageUrl from "../../assets/elaria/kael.jpg";

export default function Home() {
  const worlds = [
    {
      title: "Elysium",
      history:
        "Elysium is a realm where magic and technology coexist in harmony, with towering cities and sprawling forests. The land is ruled by a council of mages and scholars, who maintain balance and peace among the various races that inhabit the world. Despite the tranquility, dark forces lurk in the shadows, threatening to upset the harmony of Elysium.",
      characters: [
        {
          name: "Seraphina",
          description: "A fierce warrior with a heart of gold.",
          imageUrl: seraphinaImageUrl,
          background:
            "Seraphina was orphaned at a young age and raised by a group of skilled warriors. She honed her skills in combat and became a formidable fighter, determined to protect those in need.",
          race: "Half-elf",
          class: "Paladin",
          realm: "Elysium",
          appearance:
            "Seraphina stands tall with long, flowing silver hair and piercing blue eyes. She wears a gleaming suit of armor and carries a shield emblazoned with a golden sun.",
          personality:
            "Seraphina is brave and compassionate, always willing to lend a helping hand to those in need. She is fiercely loyal to her friends and will do anything to protect them.",
        },
        {
          name: "Alaric",
          description: "A mysterious wizard with a troubled past.",
          imageUrl: alaricImageUrl,
          background:
            "Alaric was once a powerful mage, but he was betrayed by a former ally and lost his powers. He now seeks to regain his abilities and uncover the truth behind his betrayal.",
          race: "Human",
          class: "Wizard",
          realm: "Elysium",
          appearance:
            "Alaric has long, dark hair and piercing green eyes. He wears a dark cloak and carries a staff adorned with magical symbols.",
          personality:
            "Alaric is guarded and enigmatic, keeping his true feelings hidden beneath a stoic exterior. However, he is deeply conflicted about his past and longs for redemption.",
        },
        {
          name: "Talia",
          description: "A cunning rogue with a thirst for adventure.",
          imageUrl: taliaImageUrl,
          background:
            "Talia grew up on the streets, learning to fend for herself and hone her skills in thievery and deception. She now seeks to use her abilities for good, taking on dangerous missions in exchange for valuable information.",
          race: "Halfling",
          class: "Rogue",
          realm: "Elysium",
          appearance:
            "Talia is small and nimble, with a mischievous grin and bright blue eyes. She wears a dark hooded cloak and carries a pair of daggers.",
          personality:
            "Talia is quick-witted and charming, able to talk her way out of any situation. She is fiercely independent and has a deep-seated love of adventure. However, she can be impulsive and reckless at times, getting herself into trouble.",
        },
      ],
      ais: [
        {
          name: "HuggingChat",
          description:
            "Used to generate the history of Elysium and all of its characters. The model used was NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO.",
        },
        {
          name: "AnimatedDiff",
          description: "Used to generate the gifs of Elysium characters.",
        },
      ],
      initialWorldInfoVisible: true,
    },
    {
      title: "Neo-Recife",
      history:
        "Neo-Recife is a sprawling megacity of neon lights and urban decay, built on old Pernambuco's ruins. Skyscrapers loom over streets plagued by acid rain and crime. Mega-corporations like Arasaka control life through surveillance and propaganda. Digital rebels, or Netrunners, hack networks to fight for freedom. Gangs and cybernetic assassins clash for power, while addictive cyberware blurs the line between human and machine. The legend of the Key, a powerful artifact, promises to overthrow these corporations and liberate the city, driving Netrunners to seek it out and change Neo-Recife's fate.",
      characters: [
        {
          name: "Akemi Sato",
          description:
            "A ninja Netrunner of Japanese origin, with short black hair and piercing brown eyes. His slender, muscular body is covered in traditional Japanese tattoos and discreet cybernetic implants. She always wears a form-fitting black outfit, which combines elements of traditional Japanese clothing with cybernetic technology, and carries two cybernetic katanas on her back.",
          imageUrl: akemiImageUrl,
          background:
            "Akemi was born in a small rural village in Japan, but from an early age she felt drawn to the digital world. After the death of her parents in a corporate attack, she fled to Neo-Recife in search of revenge. There, she joined a group of rebel hackers and trained as a Netrunner and ninja. Akemi has become one of the most skilled hackers in the city, using her skills to fight Arasaka and other megacorporations.",
          race: "Human",
          class: "Netrunner",
          strengths:
            "Intelligent, agile, skilled in hand-to-hand combat and hacking, loyal to his friends, dedicated to justice.",
          weaknesses:
            "Impulsive, vindictive, sometimes she acts without thinking about the consequences, she has difficulty trusting new people.",
        },
        {
          name: 'Jax "Metalhead" Stone',
          description:
            'Jax "Metalhead" Stone is an American-born cyborg mercenary with a body composed almost entirely of metal. His face is a cybernetic mask with glowing red eyes, and he has metallic arms and legs that give him superhuman strength. Jax always wears a black leather jacket and carries an arsenal of firearms and bladed weapons.',
          imageUrl: jaxImageUrl,
          background:
            "Jax was a soldier in the American military who was seriously injured in a war against megacorporations. To save his life, he was subjected to a cybernetization process, which transformed him into a cyborg. Jax became a mercenary, using his skills for the highest bidder. He is known for his brutality and efficiency, but he also has his own code of honor and always protects the innocent.",
          race: "Human (Cyborg)",
          class: "Mercenary",
          strengths:
            "Strong, resilient, skilled in combat, loyal to his principles, protector of the innocent.",
          weaknesses:
            "Reckless, impulsive, prone to violence, has difficulty connecting with other people.",
        },
        {
          name: "Xar'tul",
          description:
            "Xar'tul is an alien hacker of unknown origin. It has an insectoid appearance, with green skin, large, glowing eyes, and several antennae on its head. Xar'tul is small and thin, but has a keen intelligence and an incredible capacity for technological manipulation. He always wears a dark green cloak and carries a holographic datapad.",
          imageUrl: xartulImageUrl,
          background:
            "Xar'tul arrived on Earth in a mysterious spaceship and quickly adapted to life on Neo-Reef. He became a talented hacker, using his skills to steal information from megacorporations and sell it to the highest bidder. Xar'tul is motivated by profit, but he also has a sense of justice and sometimes uses his abilities to help those in need.",
          race: "Alien",
          class: "Hacker",
          strengths:
            "Intelligent, skilled in hacking, creative, independent, defender of those in need.",
          weaknesses:
            "Arrogant, greedy, suspicious of other people, he has difficulty integrating into human society.",
        },
      ],
      ais: [
        {
          name: "Gemini",
          description:
            "Used to generate the history of Neo-Recife and all of its characters.",
        },
        {
          name: "Civitai",
          description:
            "Used to generate the images of Neo-Recife characters, using the ToonYou model.",
        },
      ],
      initialWorldInfoVisible: false,
    },
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
          description:
            "Used to generate the history of Elaria and all of its characters.",
        },
        {
          name: "Stable Diffusion",
          description: "Used to generate images of Elaria's characters.",
        },
      ],
      initialWorldInfoVisible: false,
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
