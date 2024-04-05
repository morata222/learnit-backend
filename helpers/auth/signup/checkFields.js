 const checkFields = (body , next) => {
   for (let key in body) {
      if (!body[key]) {
          return false;
      }
   }
   return true;
}
export default checkFields;