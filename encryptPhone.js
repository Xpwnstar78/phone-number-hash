/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */


module.exports = encryptPhoneNumber;

function encryptPhoneNumber() {
let phoneNumber = '718-499-8837';
console.log(phoneNumber.replace('718-499', '***-***'));
}
encryptPhoneNumber();