<template>
    <div class="rolling-numbers-section">
        <div class="container">
            <div class="stats-grid">
                <div v-for="(stat, index) in stats" :key="index" class="stat-card" ref="statCards">
                    <div class="stat-icon">
                        <i :class="stat.icon"></i>
                    </div>
                    <div class="stat-number">
                        {{ animatedValues[index] }}<span class="stat-suffix">{{ stat.suffix }}</span>
                    </div>
                    <div class="stat-label">{{ stat.label }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'

// Stats data
const stats = ref([
    {
        number: 60,
        suffix: '+',
        label: 'Project Done',
        icon: 'fas fa-chart-line'
    },
    {
        number: 25,
        suffix: '+',
        label: 'Happy Customers',
        icon: 'fas fa-users'
    },
    {
        number: 100,
        suffix: 'M',
        label: 'ARR Delivered',
        icon: 'fas fa-trophy'
    },
    {
        number: 15,
        suffix: '+',
        label: 'Team Members',
        icon: 'fas fa-user-friends'
    }
])

// Animated values
const animatedValues = reactive(stats.value.map(() => 0))
const statCards = ref([])

// Animation function
const animateNumber = (startValue, endValue, duration, index) => {
    const startTime = performance.now()

    const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)

        animatedValues[index] = Math.floor(startValue + (endValue - startValue) * easeOutCubic)

        if (progress < 1) {
            requestAnimationFrame(animate)
        }
    }

    requestAnimationFrame(animate)
}

// Intersection Observer for triggering animations
onMounted(() => {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = statCards.value.indexOf(entry.target)
                if (index !== -1) {
                    // Stagger the animations
                    setTimeout(() => {
                        animateNumber(0, stats.value[index].number, 2000, index)
                        entry.target.classList.add('animate-in')
                    }, index * 200)
                }
            }
        })
    }, observerOptions)

    // Observe all stat cards
    statCards.value.forEach((card) => {
        if (card) observer.observe(card)
    })
})
</script>

<style scoped>
.rolling-numbers-section {
    background: var(--color-black);
    padding: var(--space-20) 0;
    position: relative;
    overflow: hidden;
}

/* .rolling-numbers-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg,
            transparent 0%,
            var(--color-primary) 50%,
            transparent 100%);
} */

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--space-6);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-8);
    max-width: 1200px;
    margin: 0 auto;
}

.stat-card {
    text-align: center;
    padding: var(--space-8);
    background: rgba(255, 255, 255, 0.02);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(var(--color-primary-rgb), 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(30px);
    opacity: 0;
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
            transparent 0%,
            rgba(var(--color-primary-rgb), 0.1) 50%,
            transparent 100%);
    transition: left 0.6s ease;
}

.stat-card:hover::before {
    left: 100%;
}

.stat-card.animate-in {
    transform: translateY(0);
    opacity: 1;
}

.stat-card:hover {
    transform: translateY(-10px);
    border-color: rgba(var(--color-primary-rgb), 0.3);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px rgba(var(--color-primary-rgb), 0.1);
}

.stat-icon {
    margin-bottom: var(--space-4);
    position: relative;
    z-index: 2;
}

.stat-icon i {
    font-size: 3rem;
    color: var(--color-primary);
    transition: all 0.3s ease;
}

.stat-card:hover .stat-icon i {
    transform: scale(1.1);
    color: var(--color-primary-light);
}

.stat-number {
    font-family: var(--font-family-heading);
    font-size: 3.5rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-text-white);
    margin-bottom: var(--space-2);
    line-height: 1;
    position: relative;
    z-index: 2;
    transition: color 0.3s ease;
}

.stat-suffix {
    color: var(--color-primary);
    font-size: 0.8em;
}

.stat-card:hover .stat-number {
    color: var(--color-primary-light);
}

.stat-label {
    font-family: var(--font-family-body);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;
    z-index: 2;
    transition: color 0.3s ease;
}

.stat-card:hover .stat-label {
    color: var(--color-text-white);
}

/* Responsive Design */
@media (max-width: 768px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-4);
    }

    .stat-number {
        font-size: 2.5rem;
    }

    .stat-icon i {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }

    .stat-card {
        padding: var(--space-6);
    }
}

/* Animation keyframes for additional effects */
@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }
}

.stat-card:hover .stat-icon {
    animation: pulse 2s infinite;
}
</style>