document.addEventListener("DOMContentLoaded", function() {
    //ambil elemen dari DOM
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    
    //fungsi untuk menambahkan tugas
    addTaskButton.addEventListener("click", function(){
        const task = taskInput.value.trim();
    
        if (task === "") {
            alert("Tugas tidak boleh kosong");
            return;
        }
    
        //elemen <li> baru
        const li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete">Hapus</button>`;
        taskList.appendChild(li);
    
        // kosongkan input setelah tugas ditambahkan
        taskInput.value = "";
    
        //tambahkan event listener untuk tombol hapus
        li.querySelector(".delete").addEventListener("click", function(){
            taskList.removeChild(li);
        });
    });
    }); 
    