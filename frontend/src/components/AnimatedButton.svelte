<script>
    export let text = 'Button';
    export let href = '#';
</script>

<style>
    .button {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        margin: 0.5rem;
        background: #00d084;
        color: #fff;
        text-decoration: none;
        border-radius: 8px;
        transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
        font-weight: bold;
        position: relative;
        overflow: hidden;
    }

    .button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 300%;
        height: 300%;
        background: rgba(255, 255, 255, 0.2);
        transition: transform 0.3s;
        transform: translateX(-100%);
        z-index: 0;
    }

    .button:hover::before {
        transform: translateX(0);
    }

    .button:hover {
        background: #00a859;
        transform: scale(1.1);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    }

    .button span {
        position: relative;
        z-index: 1;
    }
</style>

<a class="button" href={href}><span>{text}</span></a>