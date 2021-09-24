import { useState } from 'react';

const initialFormValues = { fullname: '', phone_number: '' };

function Form({ addContact, contacts }) {

  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.phone_number === '' && form.fullname === '') return false;
    addContact([...contacts, form]);
    console.log(form);
    setForm(initialFormValues);
  };

  return (
    <div onSubmit={onSubmit}>
      <form>
        <div>
          <input
            name="fullname"
            placeholder="Full-name"
            onChange={onChangeInput}
            value={form.fullname}
          />
        </div>
        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            onChange={onChangeInput}
            value={form.phone_number}
          />
        </div>
        <div className="btn">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
