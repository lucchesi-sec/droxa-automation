import { Footer } from '@/components/ui/footer-section';

export default function FooterDemo() {
	return (
		<div className="relative flex min-h-svh flex-col">
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
				<div className="text-center space-y-4">
					<h1 className="font-mono text-4xl font-bold text-foreground">
						Droxa Automation
					</h1>
					<p className="text-muted-foreground text-lg max-w-md">
						Scroll down to see the beautifully animated footer!
					</p>
					<div className="animate-bounce mt-8">
						<svg
							className="w-6 h-6 mx-auto text-muted-foreground"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
