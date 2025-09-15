<style>

.gallery {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.gallery-item {
    flex: 0 1 calc(33.333% - 40px/3); /* Desativa flex-grow */
    max-width: calc(33.333% - 40px/3); /* Garante que não passe da largura desejada */
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-item img:hover {
    transform: scale(1.05);
}

/* Responsividade para mobile */
@media (max-width: 768px) {
    .gallery-item {
        flex: 0 1 100%; /* 1 por linha */
        max-width: 100%; /* Consistência no mobile */
    }

    .gallery {
        gap: 15px;
    }
}
    </style>


    <div class="gallery">


       <?php
        // Caminho da pasta equipe
        $pasta = 'assets/img/equipe/';
        // Extensões de imagem permitidas
        $extensoes = ['jpg', 'jpeg', 'png', 'gif'];
        // Lista arquivos da pasta
        $arquivos = glob($pasta . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);

        // Verifica se há arquivos
        if ($arquivos) {
            foreach ($arquivos as $imagem) {
                // Gera um elemento para cada imagem
                echo '<div class="gallery-item">';
                echo '<img src="' . $imagem . '" alt="Foto da equipe" loading="lazy">';
                echo '</div>';
            }
        }
        ?>






    </div>