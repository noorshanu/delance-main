import HubspotForm from "react-hubspot-form";

function Form() {
  return (
    <div>
      <HubspotForm
        portalId="27146960"
        formId="a3790f79-6269-4a31-9d71-c6de4b3bab7f"
        // onSubmit={() => console.log("Submit!")}
        // onReady={(form) => console.log("Form ready!")}
        loading={<p className="white">Loading...</p>}
      />
    </div>
  );
}

export default Form;
