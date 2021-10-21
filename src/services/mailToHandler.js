import { EmailAddress } from '../environment';

const mailtoHandler = () => {
  const email = EmailAddress;
  const subject = 'subject=Hi Linda';
  const body = 'body=Hi Linda, I just saw your portfolio and ....';

  const mailToText = [subject, body].join('&');

  window.location = `mailto:${email}?${mailToText}`;
};

export default mailtoHandler;
