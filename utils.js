const emailCheck = val => (/^[A-z\d]+@+[A-z\d]+(\.)+[A-z\d]+$/g.test(val) ? undefined : 'Incorrect email format!')


module.exports = {
  emailCheck
}

