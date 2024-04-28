 var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if (!sidebarOpen) { // Corrected the condition from 'fsidebarOpen' to '!sidebarOpen'
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() { // Changed function name from 'classSidebar' to 'closeSidebar'
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false; // Removed 'var' keyword here to update the global variable
  }
}

