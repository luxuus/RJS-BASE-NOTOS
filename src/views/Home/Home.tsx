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
        <h2>Home Content</h2>
        <hr />
        <UI.Button
          level="optional"
          size="large"
          action={() => alert("Button clicked!")}
          disabled
        >
          Click Me
        </UI.Button>
        <UI.Button
          level="primary"
          size="medium"
          action={() => alert("Button clicked!")}
        >
          Click Me
        </UI.Button>
        <UI.Button
          level="critical"
          size="small"
          action={() => alert("Button clicked!")}
        >
          Click Me
        </UI.Button>
        <UI.Image
          url={
            "https://images.unsplash.com/photo-1548772981-2fded21624d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2574"
          }
          description={"Mountain"}
          width={500}
        />
      </UI.Main>
      <UI.Footer>
        <UI.Footer.Content label={"Socials"}>
          <UI.Footer.Social
            iconUrl="https://www.svgrepo.com/show/512317/github-142.svg"
            url="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            label={"Luxuuus"}
          />
          <UI.Footer.Social
            iconUrl="https://www.svgrepo.com/show/512419/linkedin-161.svg"
            url="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            label={"Luxuuus"}
          />
          <UI.Footer.Social
            iconUrl="https://www.svgrepo.com/show/506477/facebook.svg"
            url="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            label={"Luxuuus"}
          />
        </UI.Footer.Content>
        <UI.Footer.Content label={"Contact"}>
          <UI.Footer.Contact
            text={"07 12 23 45 56"}
            iconUrl={"https://www.svgrepo.com/show/533285/phone.svg"}
          ></UI.Footer.Contact>
          <UI.Footer.Contact
            text={"tnoel@armonie.group"}
            iconUrl={"https://www.svgrepo.com/show/533210/mail-open.svg"}
          ></UI.Footer.Contact>
        </UI.Footer.Content>
        <UI.Footer.Content label={"Legal Mentions"}>
          <UI.Footer.Legal text={"Mentions Légales"} url="#"></UI.Footer.Legal>
        </UI.Footer.Content>
      </UI.Footer>
    </div>
  );
};

export default Home;
