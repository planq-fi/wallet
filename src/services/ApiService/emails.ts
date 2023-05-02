import axios from 'axios';

const URL = 'https://proxy.mycryptoapi.com/mc';

export function subscribeToMailingList(email: string) {
  return axios.post(URL, {
    email_address: email,
    status: 'subscribed',
    tags: ['wallet.planq.finance']
  });
}
