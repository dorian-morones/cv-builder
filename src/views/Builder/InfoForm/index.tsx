
import React, { FunctionComponent } from 'react';
import { withRouter } from "react-router";
import {
  Field,
  Form,
  Formik
} from 'formik';

// styled components
import {
  FormContainer,
  FormTitle,
  FormRow,
  FormColum,
  FieldsContainer
} from './styles/infoForm_styles'

interface InfoFormProps { }

const InfoForm: FunctionComponent<InfoFormProps> = () => {
  return (
    <>
      <FormContainer>
        <FormTitle>Profile</FormTitle>
        <Formik
          initialValues={{}}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          <Form>
            <FieldsContainer>
              <FormRow>
                <FormColum>
                  <label htmlFor="heading">Heading</label>
                  <Field id="heading" name="heading" placeholder="Heading" />
                </FormColum>
              </FormRow>

              <FormRow>
                <FormColum>
                  <label htmlFor="firstName">First Name</label>
                  <Field id="firstName" name="firstName" placeholder="First Name" />
                </FormColum>

                <FormColum>
                  <label htmlFor="lasttName">Last Name</label>
                  <Field id="lastName" name="lasttName" placeholder="Last Name" />
                </FormColum>
              </FormRow>

              <FormRow>
                <FormColum>
                  <label htmlFor="subtitle">Subtitle</label>
                  <Field id="subtitle" name="subtitle" placeholder="Subtitle" />
                </FormColum>
              </FormRow>

              <FormRow>
                <FormColum>
                  <label htmlFor="birthdate">Date of birth</label>
                  <Field id="birthdate" name="birthdate" placeholder="birthdate" />
                </FormColum>
              </FormRow>



              <FormRow>
                <FormColum>
                  <label htmlFor="addressline1">Address line 1</label>
                  <Field id="addressline1" name="addressline1" placeholder="Address 1" />
                </FormColum>
              </FormRow>

              <FormRow>
                <FormColum>
                  <label htmlFor="addressline2">Address line 2</label>
                  <Field id="addressline2" name="addressline2" placeholder="Address 2" />
                </FormColum>
              </FormRow>

              <FormRow>
                <FormColum>
                  <label htmlFor="city">City</label>
                  <Field id="city" name="city" placeholder="city" />
                </FormColum>
                <FormColum>
                  <label htmlFor="zipcode">Zipcode</label>
                  <Field id="zipcode" name="zipcode" placeholder="Zipcode" />
                </FormColum>
              </FormRow>

              <FormRow>
                <FormColum>
                  <label htmlFor="phoneNumber">Phone number</label>
                  <Field id="phoneNumber" name="phoneNumber" placeholder="phone" />
                </FormColum>
              </FormRow>

              <FormRow>
                <FormColum>
                  <label htmlFor="website">Website</label>
                  <Field id="website" name="website" placeholder="Website" />
                </FormColum>
              </FormRow>

              <FormRow>
                <FormColum>
                  <label htmlFor="email">Email address</label>
                  <Field id="email" type="email" name="email" placeholder="email" />
                </FormColum>
              </FormRow>

              <FormTitle>Objectives</FormTitle>
              <FormRow>
                <FormColum>
                  <label htmlFor="objectiveHeading">Heading</label>
                  <Field id="objectiveHeading" name="objectiveHeading" placeholder="objective" />
                </FormColum>
              </FormRow>

              <FormRow>
                <FormColum>
                  <label htmlFor="objectiveSummary">Summary</label>
                  <Field id="objectiveSummary" as="textarea" name="objectiveSummary" placeholder="sumarry" />
                </FormColum>
              </FormRow>

              <FormTitle>Work experience</FormTitle>
              <FormTitle>Education</FormTitle>
              <FormTitle>Projects</FormTitle>
              <FormTitle>Awards</FormTitle>
              <FormTitle>Certifications</FormTitle>
              <FormTitle>Skills</FormTitle>
              <FormTitle>Hobbies</FormTitle>
              <FormTitle>Languages</FormTitle>
              <FormTitle>References</FormTitle>

              {/* <button type="submit">Submit</button> */}
            </FieldsContainer>
          </Form>
        </Formik>
      </FormContainer>
    </>
  );
};

export default withRouter(InfoForm);