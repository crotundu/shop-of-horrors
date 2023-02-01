<script>
  import {isCartOpen} from "../cartStore";
  export let title;
</script>

<button on:click={() => isCartOpen.set(!$isCartOpen)}>{title}</button>
