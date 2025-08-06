        const form = document.querySelector('form');
        const thanks = document.getElementById('thanks-message');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const data = new FormData(form);
            fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    form.reset();
                    thanks.style.display = 'block';
                } else {
                    thanks.style.display = 'block';
                    thanks.style.color = 'red';
                    thanks.textContent = 'حدث خطأ، حاول مرة أخرى.';
                }
            }).catch(() => {
                thanks.style.display = 'block';
                thanks.style.color = 'red';
                thanks.textContent = 'حدث خطأ، حاول مرة أخرى.';
            });
        });