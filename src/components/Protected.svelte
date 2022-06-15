<script>
  // Ce renderless component protège la route sur lequel il est monté en cherchant à valider le JWT.
  // En cas d'échec, redirige vers la page de login.
  import { browser } from "$app/env";
  import jwt_decode from "jwt-decode";
  import { token } from "../stores/token";
  import { goto } from "$app/navigation";
  if (browser) {
    try {
      // Tenter de décoder un JWT invalide (ou inexistant) déclenche une exception.
      // NOTE: il s'agit du token présent dans le store, pas directement (ni nécessairement) celui qui est persisté dans sessionStorage.
      const decoded = jwt_decode($token);
      // On compare le timestamp de maintenant avec celui de l'expiration du token.
      // https://stackoverflow.com/questions/11893083/convert-normal-date-to-unix-timestamp
      if (decoded.exp < Math.floor(new Date().getTime() / 1000))
        throw "Le token a expiré.";
    } catch (e) {
      goto("/login");
    }
  }
</script>
