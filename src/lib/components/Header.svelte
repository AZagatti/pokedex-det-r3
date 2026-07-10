<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
	<div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<a href="/" class="flex items-center gap-2">
				<span class="text-2xl font-bold text-red-600">Pokédex</span>
			</a>
			<nav class="flex gap-6">
				<a
					href="/"
					class="text-sm font-medium transition-colors"
					class:text-red-600={$page.url.pathname === '/'}
					class:text-gray-600={$page.url.pathname !== '/'}
				>
					Home
				</a>
				<a
					href="/list"
					class="text-sm font-medium transition-colors"
					class:text-red-600={$page.url.pathname === '/list'}
					class:text-gray-600={$page.url.pathname !== '/list'}
				>
					List
				</a>
				<a
					href="/search"
					class="text-sm font-medium transition-colors"
					class:text-red-600={$page.url.pathname === '/search'}
					class:text-gray-600={$page.url.pathname !== '/search'}
				>
					Search
				</a>
				<a
					href="/about"
					class="text-sm font-medium transition-colors"
					class:text-red-600={$page.url.pathname === '/about'}
					class:text-gray-600={$page.url.pathname !== '/about'}
				>
					About
				</a>
			</nav>
		</div>
	</div>
</header>
