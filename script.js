document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart-two').getContext('2d');
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',"August","September","October","November","December"];
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Earnings',
                data: [3500,5900,4800,6500,9200,10040,7842,8800,6200,7180,4600,12000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });



    const data = {
        labels: ['Meta', 'Twitter', 'Whatsapp'],
        datasets: [{
            label: 'Activity',
            data: [40000, 25000, 20000],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                }
            }
        },
    };

    const context = document.getElementById('myChart-one').getContext('2d');
    new Chart(context, config);

});


    // Fetching Data from Mock API

    const tableBody = document.querySelector("#data-table tbody")
    try{
        fetch("https://jsonplaceholder.typicode.com/users")
         .then(response => response.json())
         .then(data=>{
            data.map(item=>{
                const row = `<tr data-userid="${item.id}">
                   <td data-cell="id">${item.id}</td>
                   <td data-cell="name">${item.name}</td>
                   <td data-cell="username">${item.username}</td>
                   <td data-cell="email">${item.email}</td>
                   <td data-cell="street">${item.address.street}</td>
                   <td data-cell="city">${item.address.city}</td>
                   <td data-cell="zipcode">${item.address.zipcode}</td>
                </tr>`
                tableBody.innerHTML += row
            })
         })
    }
    catch(err){
        console.log("error:",err)
    }



const products = document.querySelector("#products");
try {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        data.map(item => {
            const productData = `
                <div class="border shadow p-3 mb-2">
                    <div class="d-flex align-items-center product">
                        <div><img class="img-resize me-4" src="${item.image}" alt="${item.title}" /></div>
                        <div>
                            <div class="fw-bold">${item.title}</div>
                            <div>${item.description}</div>
                            <div>${item.category}</div>
                            <div class="text-warning">&dollar;${item.price}</div>
                        </div>
                    </div>
                </div>
            `;
            products.innerHTML += productData;
        });
    });
} catch (err) {
    console.log("error", err);
}




const formatDate = (inputDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
    return formattedDate;
  };



  const projectsContainer = document.querySelector("#projects");

  fetch("./assets/projects.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const projectData = `
          <div class="col-lg-3 mb-3">
            <div class="border rounded me-3 overflow-hidden py-3 h-100">
              <div class="row mx-2">
                <div class="col-lg-7 mb-3">
                  ${item.open_task} open tasks
                </div>
                <div class="col-lg-5">
                  ${
                    item.type === "Website"
                      ? `<div class="border bg-info text-white pe-2 rounded text-center">${item.type}</div>`
                      : item.type === "Android"
                      ? `<div class="border bg-success text-white pe-2 rounded text-center">${item.type}</div>`
                      : item.type === "IPhone"
                      ? `<div class="border bg-dark text-white pe-2 rounded text-center">${item.type}</div>`
                      : item.type === "Testing"
                      ? `<div class="border bg-primary text-white pe-2 rounded text-center">${item.type}</div>`
                      : ''
                  }
                </div>
              </div>
  
              <div class="row mb-3 ms-2">
                <div class="col">${item.description}</div>
              </div>
  
              <div class="row mb-3 text-center">
                <div class="col">Created:</div>
                <div class="col">${formatDate(item.created)}</div>
              </div>

              <div class="row mb-3 text-center">
              <div class="col">Team Leader:</div>
              <div class="col">${item.team_leader}</div>
              </div>


            <div class="row mb-3 text-center">
              <div class="col">Deadline:</div>
              <div class="col">${formatDate(item.deadline)}</div>
            </div>

            <div class="row mb-3 text-center">
              <div class="col">Comments:</div>
              <div class="col">${item.comments}</div>
            </div>

            <div class="row mb-3 text-center">
              <div class="col">Bug:</div>
              <div class="col">${item.bugs}</div>
            </div>

            <div class="row mb-3 text-center">
                <div class="col">Progress</div>
                <div class="col">${item.progress}%</div>
            </div>

  
            </div>
          </div>
        `;
        projectsContainer.innerHTML += projectData;
      });
    })
    .catch((err) => console.log("error", err));
  

    // form submission

    function submitForm() {
        // Get form input values
        const name = document.getElementById('name').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
      
        // Display form details below the form
        const formOutput = document.getElementById('formOutput');
        formOutput.innerHTML = `
          <div class="alert alert-info" role="alert">
            <strong>Name:</strong> ${name}<br>
            <strong>Username:</strong> ${username}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Password:</strong> ${'*'.repeat(password.length)}
          </div>
        `;
      }












