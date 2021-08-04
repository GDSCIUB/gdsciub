import React from 'react';
import './Faqs.css';

const Faqs = () => {
    return (
        <div className="faqs" id="faqs">
            <div>
                <h1>Frequently Asked Questions</h1>
            </div>

            <div className="faq__card">
                <div className="faqCard__body">
                    <h2 className="faqCard__title">Who can become a member?</h2>
                    <p>The clubs is open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills.</p>
                </div>
                <div className="faqCard__body">
                    <h2 className="faqCard__title">How frequently do events and workshops occur?</h2>
                    <p>We hold workshops and showcases at IUB & we would recommend you to join our community by becoming a member to get updates.</p>
                </div>
            </div>

            <div className="faq__card">
                <div className="faqCard__body">
                    <h2 className="faqCard__title">What should I carry when attending a workshop?</h2>
                    <p>We recommend you carry with you a notebook, pen and a laptop because more often than not we make our hands dirty with code. Most importantly, carry along a healthy dose of curiosity and enthusiasm.</p>
                </div>
                <div className="faqCard__body">
                    <h2 className="faqCard__title">Who should I reach out to if I have any questions?</h2>
                    <p>If you have any questions or comments, please don't hesitate to contact us. You can find an email at the end of the page. We would be happy to stay engaged via email even after the event.</p>
                </div>
            </div>
        </div>
    )
}

export default Faqs;
