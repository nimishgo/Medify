/* eslint-disable react/prop-types */
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { PlusIcon } from "@radix-ui/react-icons";
import "./styles.css";

const AccordionDemo = () => (
  <Accordion.Root className="AccordionRoot" type="single" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger className="p-4 text-lg">
        Why choose our medical for your family?
      </AccordionTrigger>
      <AccordionContent></AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger className="p-4 text-lg">
        Why are we different from others?
      </AccordionTrigger>
      <AccordionContent></AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger className="p-4 text-lg">
        Trusted & experience senior care.
      </AccordionTrigger>
      <AccordionContent></AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-4">
      <AccordionTrigger className="p-4 text-lg">
        How to get Appointment for emergency cases?
      </AccordionTrigger>
      <AccordionContent></AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <PlusIcon className="AccordionChevron" />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

export default AccordionDemo;
