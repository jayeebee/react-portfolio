import React from 'react';

function Contact() {
        return(
            <div className='wrapper'>
                <h1>Contact Me</h1>
                <form>
                    <fieldset>
                        <label>
                            <p>Name</p>
                            <input name="name" />
                        </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

export default Contact;