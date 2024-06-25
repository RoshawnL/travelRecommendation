const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

function clearForm() {
    document.getElementById('placeInput').value = "";
    document.getElementById('result').innerHTML = "";
  }

function searchPlace() {
    const input = document.getElementById('placeInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    fetch('./travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        let names = []
        let images = []
        let descs = []
        if (input === 'countries' || input === 'country'){
            
            const country = data.countries;
            country.forEach((item) => {
                const city = item.cities;
                city.forEach((item) => {
                    
                    names.push(item.name);
                    images.push(item.imageUrl);
                    descs.push(item.description);

                })
                // console.log(names)

            })
            for(let i = 0; i < 2; i++) {
            resultDiv.innerHTML += `<h2>${names[i]}</h2>`;
            resultDiv.innerHTML += `<img src="./Images/${images[i]}" alt="hjh">`;
            resultDiv.innerHTML += `<p><strong>Description:</strong>${descs[i]}</p>`;
          }
          

            console.log(country)
            console.log(names)
            console.log(names[2])
            console.log(images)
            console.log(images[2])
            console.log(descs)
            console.log(descs[2])
        }
        else if (input === 'temples' || input === 'temple'){
            const temple = data.temples;
            temple.forEach((item)=> {
                names.push(item.name);
                images.push(item.imageUrl);
                descs.push(item.description);            })
                console.log(temple)
                console.log(names)
                console.log(names[1])
                console.log(images)
                console.log(images[1])
                console.log(descs)
                console.log(descs[1])

                names.forEach((item, i) => {
                    resultDiv.innerHTML += `<h2>${names[i]}</h2>`;
                    resultDiv.innerHTML += `<img src="./Images/${images[i]}" alt="hjh">`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong>${descs[i]}</p>`;
                  })
              
        }
        else if (input === 'beaches' || input === 'beach'){
            const beach = data.beaches;
            beach.forEach((item)=> {
                names.push(item.name);
                images.push(item.imageUrl);
                descs.push(item.description);            })
                console.log(beach)
                console.log(names)
                console.log(names[1])
                console.log(images)
                console.log(images[1])
                console.log(descs)
                console.log(descs[1])

                names.forEach((item, i) => {
                    resultDiv.innerHTML += `<h2>${names[i]}</h2>`;
                    resultDiv.innerHTML += `<img src="./Images/${images[i]}" alt="hjh">`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong>${descs[i]}</p>`;
                  })
        } else {
            console.log("NO SUCH THING")
            console.log(input)
        }
    
        
        
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function thankyou(){
    alert('Thank you for contacting us!')
}

btnSearch.addEventListener('click', searchPlace);
btnClear.addEventListener("click", clearForm);