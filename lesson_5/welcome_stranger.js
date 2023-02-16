function greetings(arr, obj) {
  let fullName = ''

  for (let index = 0; index < arr.length; index += 1) {
    fullName += (' ' + arr[index]);
  }

  let profession = obj.title + ' ' + obj.occupation;

  console.log(`Hello,${fullName}! Nice to have a ${profession} around.`)
}


greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
