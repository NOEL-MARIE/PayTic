import React from "react";
import { Container_Nav } from "../../container/container_Nav";
import { Container } from "../../container/container_";
import { Button } from "../../Typo/button/buttons";

import { Typography } from "../../Typo/Typography";
import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      {" "}
      <Container_Nav>
        <Container>
          <div className="  flex gap-1  ">
            <span className="border">

            </span>
            <Typography variant="Logo_text" className=" pt-[6px]">
              <Image
                src="/asset/PayTic.svg"
                width={73.96522521972656}
                height={26}
                alt="PayTic.svg"
              />
            </Typography>
          </div>{" "}
          <Typography
            variant="NavText"
            theme="gray"
            className="flex justify-between gap-4 text-text_navigation"
          >
            {" "}
            <p>Nos services</p>
            <p>Nos tarifs</p>
            <p>Comment ça marche ?</p>
          </Typography>
          <div className=" flex justify-between gap-4 ">
            {" "}
            <Button variant="Besoin d’aide">Besoin d’aide</Button>
            <Button variant="Demander une démo">Demander une démo</Button>
          </div>
        </Container>
      </Container_Nav>
    </div>
  );
}
