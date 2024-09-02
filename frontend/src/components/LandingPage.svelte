<script>
    // Additional JavaScript or Svelte logic here
import AnimatedButton from "./AnimatedButton.svelte";
</script>

<style>
    .header-content {
        padding: 2rem;
    }

    h1 {
        font-size: 3rem;
        color: #00d084;
    }

    h2 {
        font-size: 2rem;
    }

    .intro {
        padding: 2rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
        animation: slideIn 1s ease-out;
    }

    @keyframes slideIn {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>

<header>
    <div class="container header-content">
        <h1>Futuristic Attendance Tracker</h1>
        <p>Your smart solution for managing student attendance with cutting-edge technology.</p>
    </div>
</header>

<main>
    <div class="container">
        <section class="intro">
            <h2>Welcome to the Future</h2>
            <p>Experience real-time attendance management with an intuitive and futuristic interface.</p>
            <AnimatedButton text="Get Started" href="/signup" />
            <AnimatedButton text="Log In" href="/login" />
        </section>
    </div>
</main>

<footer>
    <div class="container">
        <p>&copy; 2024 Attendance Tracker. All rights reserved.</p>
    </div>
</footer>