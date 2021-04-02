import React from "react";
import Layout from "../components/layout";

const contactUs = () => (
  <Layout>
    <div>
      <h1>I am the contact-us page.</h1>
    </div>
  </Layout>
);

export default contactUs;
// import React from "react";
// import { graphql } from "gatsby";
// import Layout from "../components/layout";
// // import { formium } from "../lib/formium";
// import { FormiumForm, defaultComponents } from "@formium/react";

// // import {
// //   Radio as ChakraRadio,
// //   RadioGroup as ChakraRadioGroup,
// //   Textarea as ChakraTextarea,
// //   Button,
// //   Input,
// //   Container,
// //   Heading,
// // } from "@chakra-ui/react";

// // function Header(props) {
// //   return <Heading mb={10}> Contact Form</Heading>;
// // }
// // function TextInput(props) {
// //   return <Input {...props} />;
// // }
// // function Textarea(props) {
// //   return <ChakraTextarea {...props} />;
// // }

// // function Radio(props) {
// //   const { label, value: foo } = props;

// //   const [value, setValue] = React.useState("Male");

// //   return (
// //     <ChakraRadioGroup onChange={setValue} value={value}>
// //       <stack direction="row">
// //         <ChakraRadio value={foo}>{label}</ChakraRadio>
// //       </stack>
// //     </ChakraRadioGroup>
// //   );
// // }
// // function SubmitButton(props) {
// //   return (
// //     <Button colorScheme="blue" type="submit">
// //       Submit
// //     </Button>
// //   );
// // }

// // const myComponents = {
// //   ...defaultComponents,
// //   Header,
// //   TextInput,
// //   Textarea,
// //   Radio,
// //   SubmitButton,
// // };
// export default function FeedbackForm({ data }) {
//   return (
//     <Layout>
//       <FormiumForm
//         data={data.formiumForm}
//         // onSubmit={async (values) => {
//         //   // Send form values to Formium
//         //   await formium.submitForm("form1", values);
//         //   alert("Success");
//         // }}
//       />
//     </Layout>
//   );
// }
// export const query = graphql`
//   {
//     formiumForm(slug: { eq: "form1" }) {
//       id
//       createAt
//       name
//       projectId
//       schema
//       slug
//       updateAt
//       version
//     }
//   }
// `;
