/* Global Imports */
import { FC } from "react";

/* Application Level Imports */
import * as UI from "@/components";
import * as Hooks from "@/hooks";

/* Local Imports */
import "./Home.style.css";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  Hooks.useDocumentTitle("Home View");

  return (
    <div className="Home" data-testid="Home">
      <UI.Main>
        <h2>How to become a millionaire.</h2>

        <UI.Card>
          <UI.Card.Trigger>X</UI.Card.Trigger>
          <UI.Card.Header>
            <h2>How to get money.</h2>
          </UI.Card.Header>

          <UI.Card.Content>
            <h3>Here is how to get free money</h3>
            <UI.Image
              url={
                "https://img.freepik.com/free-photo/smiling-young-man-filming-his-video-blog-episode-about-new-tech-devices-while-sitting-kitchen-table-with-laptop-showing-bunch-money-banknotes_171337-5530.jpg?semt=ais_hybrid&w=740&q=80"
              }
              description={"Mountain"}
              width={500}
            />
            <div>Click on the button bellow to get free money.</div>
          </UI.Card.Content>
          <UI.Card.Footer>
            <UI.Button
              level="critical"
              size="small"
              action={() => alert("Button clicked!")}
            >
              Submit
            </UI.Button>
          </UI.Card.Footer>
        </UI.Card>

        <UI.Card>
          <UI.Card.Trigger>
            <UI.Skeleton.Button width={25} height={25} />
          </UI.Card.Trigger>
          <UI.Card.Header>
            <UI.Skeleton.Text width={400} height={25} rows={1} />
          </UI.Card.Header>

          <UI.Card.Content>
            <UI.Skeleton.Text width={200} height={25} rows={1} />
            <UI.Skeleton.Image width={500} height={250} />
            <UI.Skeleton.Text width={350} height={25} rows={3} />
          </UI.Card.Content>
          <UI.Card.Footer>
            <UI.Skeleton.Button width={100} height={25} />
          </UI.Card.Footer>
        </UI.Card>

        <UI.Autocomplete
          initialOptions={[
            "Aardvark",
            "Albatross",
            "Alligator",
            "Alpaca",
            "Ant",
            "Anteater",
            "Antelope",
            "Ape",
            "Armadillo",
            "Donkey",
            "Baboon",
            "Badger",
            "Barracuda",
            "Bat",
            "Bear",
            "Beaver",
            "Bee",
            "Bison",
            "Boar",
            "Buffalo",
            "Butterfly",
            "Camel",
            "Capybara",
            "Caribou",
            "Cassowary",
            "Cat",
            "Caterpillar",
            "Cattle",
            "Chamois",
            "Cheetah",
            "Chicken",
            "Chimpanzee",
            "Chinchilla",
            "Chough",
            "Clam",
            "Cobra",
            "Cockroach",
            "Cod",
            "Cormorant",
            "Coyote",
            "Crab",
            "Crane",
            "Crocodile",
            "Crow",
            "Curlew",
            "Deer",
            "Dinosaur",
            "Dog",
            "Dogfish",
            "Dolphin",
            "Dotterel",
            "Dove",
            "Dragonfly",
            "Duck",
            "Dugong",
            "Dunlin",
            "Eagle",
            "Echidna",
            "Eel",
            "Eland",
            "Elephant",
            "Elk",
            "Emu",
            "Falcon",
            "Ferret",
            "Finch",
            "Fish",
            "Flamingo",
            "Fly",
            "Fox",
            "Frog",
            "Gaur",
            "Gazelle",
            "Gerbil",
            "Giraffe",
            "Gnat",
            "Gnu",
            "Goat",
            "Goldfinch",
            "Goldfish",
            "Goose",
            "Gorilla",
            "Goshawk",
            "Grasshopper",
            "Grouse",
            "Guanaco",
            "Gull",
            "Hamster",
            "Hare",
            "Hawk",
            "Hedgehog",
            "Heron",
            "Herring",
            "Hippopotamus",
            "Hornet",
            "Horse",
            "Human",
            "Hummingbird",
            "Hyena",
            "Ibex",
            "Ibis",
            "Jackal",
            "Jaguar",
            "Jay",
            "Jellyfish",
            "Kangaroo",
            "Kingfisher",
            "Koala",
            "Kookabura",
            "Kouprey",
            "Kudu",
            "Lapwing",
            "Lark",
            "Lemur",
            "Leopard",
            "Lion",
            "Llama",
            "Lobster",
            "Locust",
            "Loris",
            "Louse",
            "Lyrebird",
            "Magpie",
            "Mallard",
            "Manatee",
            "Mandrill",
            "Mantis",
            "Marten",
            "Meerkat",
            "Mink",
            "Mole",
            "Mongoose",
            "Monkey",
            "Moose",
            "Mosquito",
            "Mouse",
            "Mule",
            "Narwhal",
            "Newt",
            "Nightingale",
            "Octopus",
            "Okapi",
            "Opossum",
            "Oryx",
            "Ostrich",
            "Otter",
            "Owl",
            "Oyster",
            "Panther",
            "Parrot",
            "Partridge",
            "Peafowl",
            "Pelican",
            "Penguin",
            "Pheasant",
            "Pig",
            "Pigeon",
            "Pony",
            "Porcupine",
            "Porpoise",
            "Quail",
            "Quelea",
            "Quetzal",
            "Rabbit",
            "Raccoon",
            "Rail",
            "Ram",
            "Rat",
            "Raven",
            "Red deer",
            "Red panda",
            "Reindeer",
            "Rhinoceros",
            "Rook",
            "Salamander",
            "Salmon",
            "Sand Dollar",
            "Sandpiper",
            "Sardine",
            "Scorpion",
            "Seahorse",
            "Seal",
            "Shark",
            "Sheep",
            "Shrew",
            "Skunk",
            "Snail",
            "Snake",
            "Sparrow",
            "Spider",
            "Spoonbill",
            "Squid",
            "Squirrel",
            "Starling",
            "Stingray",
            "Stinkbug",
            "Stork",
            "Swallow",
            "Swan",
            "Tapir",
            "Tarsier",
            "Termite",
            "Tiger",
            "Toad",
            "Trout",
            "Turkey",
            "Turtle",
            "Viper",
            "Vulture",
            "Wallaby",
            "Walrus",
            "Wasp",
            "Weasel",
            "Whale",
            "Wildcat",
            "Wolf",
            "Wolverine",
            "Wombat",
            "Woodcock",
            "Woodpecker",
            "Worm",
            "Wren",
            "Yak",
            "Zebra",
          ]}
        >
          <UI.Autocomplete.Label htmlFor="animal">
            Animals
          </UI.Autocomplete.Label>
          <UI.Autocomplete.Input id="animal" type="text" />
        </UI.Autocomplete>
        <form>
          <UI.InputGroup>
            <UI.InputGroup.Label htmlFor="username">
              Username
            </UI.InputGroup.Label>
            <UI.InputGroup.Input id="username" type="text" required />
            <UI.InputGroup.Error>
              The username is not valid.
            </UI.InputGroup.Error>
          </UI.InputGroup>
          <UI.InputGroup>
            <UI.InputGroup.Label htmlFor="email">Email</UI.InputGroup.Label>
            <UI.InputGroup.Input id="name" type="email" required />
            <UI.InputGroup.Error>
              Email address is not valid.
            </UI.InputGroup.Error>
          </UI.InputGroup>
          <UI.InputGroup>
            <UI.InputGroup.Label htmlFor="password">
              Password
            </UI.InputGroup.Label>
            <UI.InputGroup.Input id="password" type="password" required />
            <UI.InputGroup.Error>
              The password is not valid.
            </UI.InputGroup.Error>
          </UI.InputGroup>
          <UI.Button
            level="critical"
            size="small"
            action={() => alert("Button clicked!")}
          >
            Submit
          </UI.Button>
        </form>
        <UI.Loader spinner={false} progress={25} max={100} />
        <UI.Loader spinner />
      </UI.Main>
      <UI.Footer>
        <UI.Footer.Content label={"Socials"}>
          <UI.Footer.Social
            iconUrl="https://www.svgrepo.com/show/512317/github-142.svg"
            url="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            label={"Github"}
          />
          <UI.Footer.Social
            iconUrl="https://www.svgrepo.com/show/512419/linkedin-161.svg"
            url="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            label={"LinkedIn"}
          />
          <UI.Footer.Social
            iconUrl="https://www.svgrepo.com/show/506477/facebook.svg"
            url="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            label={"Facebook"}
          />
        </UI.Footer.Content>
        <UI.Footer.Content label={"Contact"}>
          <UI.Footer.Contact
            text={"01 23 45 67 89"}
            iconUrl={"https://www.svgrepo.com/show/533285/phone.svg"}
          ></UI.Footer.Contact>
          <UI.Footer.Contact
            text={"tnoel@armonie.group"}
            iconUrl={"https://www.svgrepo.com/show/533210/mail-open.svg"}
          ></UI.Footer.Contact>
        </UI.Footer.Content>
        <UI.Footer.Content label={"Legal Mentions"}>
          <UI.Footer.Legal text={"Mentions Légales"} url="#"></UI.Footer.Legal>
          <UI.Footer.Legal text={"Confidentialité"} url="#"></UI.Footer.Legal>
        </UI.Footer.Content>
      </UI.Footer>
    </div>
  );
};

export default Home;
