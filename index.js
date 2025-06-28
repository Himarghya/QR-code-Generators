import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {message : "Plz Type your URL:" , 
    name:"URL"
    }
  ])
  .then((answers) => {
    const ans = answers.URL;
    var qr_svg = qr.image(ans);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })

 