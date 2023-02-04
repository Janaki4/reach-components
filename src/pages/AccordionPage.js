import Accordion from "../component/Accordion";

function AccordionPage() {
  const items = [
    { id: "111", label: "React", content: "Front end" },
    { id: "12131", label: "Node", content: "Back end" },
    { id: "asa", label: "docker", content: "Cloud" }
  ]
  return (<Accordion items={items} />)
}

export default AccordionPage;