import readline from 'readline';
import fs from 'fs';
  
(async () => {
    await new Promise((resolve) => {

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question('Input file path\n', (name) => {

          if (name === null) {
            console.log('Please input a valid file path!')

        } else {

          const filepath = name;

          console.log(`File path set as ${name}`);
          const OT = JSON.parse(fs.readFileSync(filepath))
          
          OT.sort((entry1, entry2) =>
            entry1.filename.localeCompare(entry2.filename, 'en', { ignorePunctuation: true }));
          
          fs.writeFileSync('file-sorted.json', JSON.stringify(OT, null, 2));
          console.log('Successfully sorted json')
          
          rl.close();
          resolve();
        }
      });
    });
  })();