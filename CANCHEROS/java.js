<script>
    function mostrarFormulario(tipo) {
        // Ocultar todos los formularios
        document.getElementById('formulario-persona-natural').style.display = 'none';
        document.getElementById('formulario-persona-juridica').style.display = 'none';

        // Mostrar el formulario correspondiente al tipo seleccionado
        document.getElementById('formulario-' + tipo).style.display = 'block';
    }
</script>