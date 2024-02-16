import React, { useState } from "react";

const AccordionBox = (props) => {
  const [openContext, setOpenContext] = useState(false);

  return (
    <div
      style={{
        border: "solid 1px",
        padding: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>{props.heading}</h3>
        <button
          style={{
            height: 30,
            width: 30,
          }}
          onClick={() => {
            setOpenContext(!openContext);
            props.setId(props.item.id);
          }}
        >
          {openContext ? "-" : "+"}
        </button>
      </div>
      <div>
        {props.openMultipleTab && openContext ? (
          <div>{props.mainContext}</div>
        ) : openContext && props.item.id === props.id ? (
          <div>{props.mainContext}</div>
        ) : (
          ""
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        ></div>
      </div>
    </div>
  );
};

export const Accordion = () => {
  // const [openContext, setOpenContext] = useState(false);
  const [id, setId] = useState();
  const [openMultipleTab, setMutipleTab] = useState(false);

  const arr = [
    {
      id: 1,
      heading: "Do I have to allow the use of cookies?",
      mainContext:
        "Unicorn vinyl poutine brooklyn, next level direct trade iceland.Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      id: 2,
      heading: "How do I change my My Page password?",
      mainContext:
        "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      id: 3,
      heading: "What is BankID?",
      mainContext:
        "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
      id: 4,
      heading: "Whose birth number can I use?",
      mainContext:
        "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    },
  ];

  return (
    <div
      style={{
        padding: 50,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <h3>Is multiple open accordion allowed?</h3>
      <input
        type="checkbox"
        onChange={(e) => {
          setMutipleTab(e.currentTarget.checked);
        }}
      ></input>
      {arr.map((item, i) => {
        return (
          <AccordionBox
            key={i + item.heading}
            heading={item.heading}
            mainContext={item.mainContext}
            item={item}
            id={id}
            setId={setId}
            openMultipleTab={openMultipleTab}
          />
        );
      })}
    </div>
  );
};
