import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../index.css';

function Form() {
    const [state, handleSubmit] = useForm("xqkrqrvq");
    if (state.succeeded) {
        return <p className='form-label'>Thanks for joining!</p>;
    }
    return (
        <form method="POST" onSubmit={handleSubmit}>
            <div className='center form-margin'>
                <div className='label'>
        <label htmlFor="email" className='form-label'>
            Sign up for our newsletter
        </label>
        </div>
        <div>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="Email address"
          className="form-input"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        </div>
        <div>
        <button type="submit" disabled={state.submitting} className="form-btn">
          Subscribe
        </button>
        </div>
        </div>
      </form>
    );
  }

  export default Form;

