function switchToFloor1() {
    document.getElementById("floor1").style.display = "block";
    document.getElementById("floor2").style.display = "none";
    document.getElementById("floor1_mobile").style.display = "block";
    document.getElementById("floor2_mobile").style.display = "none";
    document.getElementById("floor1_tablet").style.display = "block";
    document.getElementById("floor2_tablet").style.display = "none";
    document.getElementById("floor1_tablet_2").style.display = "block";
    document.getElementById("floor2_tablet_2").style.display = "none";

  
    document.getElementById("floor1Btn").classList.add("active");
    document.getElementById("floor1Btn").classList.remove("btn-secondary");
    document.getElementById("floor2Btn").classList.remove("active");
    document.getElementById("floor2Btn").classList.add("btn-secondary");

    document.getElementById("floor1Btn").textContent = "Floor 1";
    document.getElementById("floor2Btn").textContent = "Switch to Floor 2";
  }
  
  function switchToFloor2() {
    document.getElementById("floor1").style.display = "none";
    document.getElementById("floor2").style.display = "block";
    document.getElementById("floor1_mobile").style.display = "none";
    document.getElementById("floor2_mobile").style.display = "block";
    document.getElementById("floor1_tablet").style.display = "none";
    document.getElementById("floor2_tablet").style.display = "block";
    document.getElementById("floor1_tablet_2").style.display = "none";
    document.getElementById("floor2_tablet_2").style.display = "block";
  
    document.getElementById("floor1Btn").classList.remove("active");
    document.getElementById("floor1Btn").classList.add("btn-secondary");
    document.getElementById("floor2Btn").classList.add("active");
    document.getElementById("floor2Btn").classList.remove("btn-secondary");
  
    document.getElementById("floor1Btn").textContent = "Switch to Floor 1";
    document.getElementById("floor2Btn").textContent = "Floor 2";
  }



  
