import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

console.log(`lg user `, user);
console.log(`lg company `, company);

const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
