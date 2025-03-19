const form = document.getElementById('registration-form');
        
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const surname = formData.get('surname');
    const username = formData.get('username');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const password = formData.get('password');
    
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet([
        { Name: name, Surname: surname, Username: username, Phone: phone, Email: email, Password: password }
    ]);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Registration Data');
    XLSX.writeFile(workbook, '../../data\users.xlsx');
});

