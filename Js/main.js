function Users(lastName, firstName, avatar) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.avatar = avatar;
  this.getName = () => {
    return `${firstName} ${lastName}`;
  };
}

var author = new Users("Trần", "Tiến", "Avatar");
var member = new Users("Nguyễn", "Trinh", "Avatar");

author.title = "Chúc bạn vui vẻ !";
member.comment = "Chuyện gì rồi cũng qua";
console.log(author.getName());
console.log(member.getName());
