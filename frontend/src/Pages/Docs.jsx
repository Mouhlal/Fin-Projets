import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import {Link} from 'react-router-dom'
import { Nav } from "../Composants/Nav";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function Docs() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="m-4">
        <Nav />
      </div>
      <div className="m-5 p-2 ">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Comment puis-je m'inscrire sur SchoolExpress{" "}
          </AccordionHeader>
          <AccordionBody>
            Pour vous inscrire sur SchoolExpress, rendez-vous sur la page
            d'inscription du site et remplissez le formulaire d'inscription en
            fournissant les informations requises telles que votre nom, votre
            adresse e-mail, etc. Suivez les instructions pour créer un compte
            avec succès.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Comment puis-je rechercher des ressources sur SchoolExpress
          </AccordionHeader>
          <AccordionBody>
            Pour rechercher des ressources sur SchoolExpress, utilisez la barre
            de recherche située en haut de la page. Tapez des mots-clés
            pertinents liés à la ressource que vous recherchez, puis appuyez sur
            Entrée. Vous verrez une liste de résultats correspondant à votre
            recherche.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Comment puis-je contacter le support client de SchoolExpress ?
          </AccordionHeader>
          <AccordionBody>
            Pour contacter le support client de SchoolExpress, vous pouvez
            utiliser le formulaire de contact disponible sur le site web.
            Accédez à la page de contact, remplissez le formulaire avec vos
            questions ou préoccupations, puis soumettez-le. Le support client
            vous répondra dans les plus brefs délais.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Puis-je proposer du contenu à SchoolExpress
          </AccordionHeader>
          <AccordionBody>
            Oui, si vous avez des ressources éducatives que vous souhaitez
            partager, vous pouvez soumettre votre contenu à SchoolExpress.
            Contactez l'équipe éditoriale via le formulaire de contact pour
            discuter des détails de soumission de contenu.
          </AccordionBody>
        </Accordion>{" "}
        <br /> <br />
        <Link to={'/'}>
            <Button
              type="submit"
              variant="gradient"
              color="black"
              className="w-full"
              onClick={handleOpen}
            >
              <span>Back</span>
            </Button>
        </Link>
      </div>
    </>
  );
}
