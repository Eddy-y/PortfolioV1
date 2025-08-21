import {FC, memo} from 'react';

const Project1Description: FC = memo(() => (
  <div>
    <p>
      The idea behind this project was simple: create a chatbot capable of outputting functional requirements for
      specific projects and automating that resource and time-consuming part of the project life cycle. This application
      was created using different components already available to developers. The logic was handled using Python, while
      Streamlit took care of our user interface. We utilized the OpenAI API to handle the requests and estimations
      needed for each project, as well as any necessary updates to the requirements.
    </p>
    <br />
    <p>
      This project served as a continuation of a past project (the RAG app) and, in the same manner, acted as a proof of
      concept that would eventually be further developed to adapt to industry-specific requirements. This was a very
      interesting experience that provided valuable insights into some of the more recent applications seen in today's
      market.
    </p>
  </div>
));

export default Project1Description;
