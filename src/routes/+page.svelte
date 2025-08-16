<script lang="ts">
	// Portfolio data
	const portfolioData = {
		name: 'Selim Yalınkılıç',
		greeting: 'Hello, I am Selim 🚀',
		title: '🧑‍💻 Frontend Developer',
		location: '🏠 Istanbul, Turkey',
		links: [
			{ text: '📝 Resume', url: '#' },
			{ text: '🔗 LinkedIn', url: 'https://www.linkedin.com/in/selimyalinkilic/' },
			{ text: '📸 Instagram', url: 'https://www.instagram.com/selimyalnklc/' },
			{ text: '🐙 GitHub', url: 'https://github.com/selimyalinkilic' }
		]
	};
</script>

<div
	class="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-200 flex justify-center items-center font-['Poppins']"
>
	<div class="container max-w-7xl mx-auto px-4 py-8 lg:py-16">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
			<!-- Left side - Text content -->
			<div class="space-y-8 order-2 lg:order-1">
				<div class="space-y-6">
					<h1 class="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
						{portfolioData.greeting}
					</h1>

					<div class="space-y-4">
						<p class="text-xl lg:text-xl font-normal text-slate-600">
							{portfolioData.title}
							<a
								href="https://shopier.com"
								target="_blank"
								class="text-indigo-500 hover:text-indigo-700 transition-colors duration-200 font-medium"
								>@shopier</a
							>
						</p>
						<p class="text-lg lg:text-xl font-normal text-slate-600">{portfolioData.location}</p>
					</div>
				</div>

				<div class="space-y-4 text-lg text-slate-600 leading-relaxed">
					<p>
						Since September 2017, I have worked in frontend development; I currently oversee the
						design and development of user-experience-focused interfaces at
						<a
							href="https://shopier.com"
							target="_blank"
							rel="noopener noreferrer"
							class="text-indigo-500 hover:text-indigo-700 transition-colors duration-200 font-medium decoration-2 underline-offset-2"
						>
							@shopier
						</a>. I value teamwork and treat consistency, accessibility, and performance as delivery
						standards. For more information, please see my résumé and social media profiles.
					</p>
				</div>

				<div class="pt-6">
					<p class="text-lg font-semibold text-slate-800 mb-4">Find me elsewhere:</p>
					<div class="flex flex-wrap gap-3">
						{#each portfolioData.links as link}
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								class="group inline-flex items-center px-5 py-3 bg-white/80 backdrop-blur-sm hover:bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 hover:text-indigo-700 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-indigo-100"
							>
								{link.text}
							</a>
						{/each}
					</div>
				</div>
			</div>

			<!-- Right side - Photo -->
			<div class="flex justify-center lg:justify-end order-1 lg:order-2">
				<div class="relative w-80 h-auto lg:w-[28rem]">
					<!-- Main photo area -->
					<div class="w-full h-full rounded-3xl shadow-2xl overflow-hidden relative">
						<!-- Profile image -->
						<img
							src="/images/profile.png"
							alt="Selim Yalınkılıç - Frontend Developer"
							class="w-full h-full object-cover object-center rounded-3xl"
							on:error={(event) => {
								// Fallback if image doesn't exist
								const img = event.target as HTMLImageElement;
								if (img && img.nextElementSibling) {
									img.style.display = 'none';
									(img.nextElementSibling as HTMLElement).style.display = 'flex';
								}
							}}
						/>

						<!-- Fallback placeholder -->
						<div
							class="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center"
							style="display: none;"
						>
							<div class="text-center text-white">
								<div class="text-7xl mb-6 animate-pulse">👨‍💻</div>
								<p class="text-xl font-medium mb-2">Selim Yalınkılıç</p>
								<p class="text-sm opacity-90">Frontend Developer</p>
							</div>
						</div>

						<!-- Decorative gradient overlay -->
						<div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
