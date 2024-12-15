document.getElementById('burgerMenu').addEventListener('click', function() {
   const sidebar = document.getElementById('sidebar');
   sidebar.classList.toggle('expanded');
});

document.getElementById('toggleSearch').addEventListener('click', function () {
   const flexCenterHeader = document.querySelector('.flexCenterHeader');
   flexCenterHeader.classList.toggle('active');
   searchContainer.classList.toggle('active');
});