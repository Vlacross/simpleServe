const emailCheck = val => (/^[A-Za-z\d\.\-]+@+[A-Za-z\d\.\-]+(\.)+[A-Za-z\d\.\-]+$/g.test(val) ? undefined : 'Incorrect email format!')


module.exports = {
  emailCheck
}

