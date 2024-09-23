
import { MailtrapClient } from "mailtrap";
// const TOKEN = "********cf24";
const ENDPOINT="https://send.api.mailtrap.io/";

 export const client=new MailtrapClient({token:process.env.MAILTRAP_API_TOKEN! });

export const sender = {
 email: "mailtrap@demomailtrap.com",
  name: "Chalise Mernstack",
};