<script>
    import {onMount} from 'svelte';
    import 'frontend/src/styles/Home.css'; // Import the CSS file

    let showContent = false;

    onMount(() => {
        setTimeout(() => {
            showContent = true;
        }, 500); // Delay to show content with an animation
    });
</script>

<div class="container">
    <h1 class:visible={showContent}>Welcome to the Futuristic Attendance Tracker</h1>
    <p class:visible={showContent}>Track attendance in a new, innovative way with real-time updates and seamless user
        experience.</p>
    <button class="button">Get Started</button>
</div>