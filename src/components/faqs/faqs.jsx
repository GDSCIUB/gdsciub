import classes from "./faqs.module.css";

export default function FAQs() {
  return (
    <div className={classes.faqs}>
      <h1>Frequently Asked Questions</h1>

      <div className={classes.questions}>
        <div>
          <p className={classes.q}>Who can become a member?</p>
          <p className={classes.a}>
            The clubs is open to any student, ranging from novice developers who
            are just starting, to advanced developers who want to further their
            skills.
          </p>
        </div>

        <div>
          <p className={classes.q}>
            How frequently do events and workshops occur?
          </p>
          <p className={classes.a}>
            We hold workshops and showcases at IUB & we would recommend you to
            join our community by becoming a member to get updates.
          </p>
        </div>
        <div>
          <p className={classes.q}>
            What should I carry when attending a workshop?
          </p>
          <p className={classes.a}>
            We recommend you carry with you a notebook, pen and a laptop because
            more often than not we make our hands dirty with code. Most
            importantly, carry along a healthy dose of curiosity and enthusiasm.
          </p>
        </div>
        <div>
          <p className={classes.q}>
            Who should I reach out to if I have any questions?
          </p>
          <p className={classes.a}>
            If you have any questions or comments, please don't hesitate to
            contact us. You can find an email at the end of the page. We would
            be happy to stay engaged via email even after the event.
          </p>
        </div>
      </div>
    </div>
  );
}
