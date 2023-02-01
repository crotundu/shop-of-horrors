<script>
  import {isCartOpen} from "../cartStore";
</script>

<button on:click={() => isCartOpen.set(!$isCartOpen)}>My Nightmare</button>
