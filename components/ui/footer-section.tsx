'use client';
import React from 'react';
import Image from 'next/image';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FrameIcon, LinkedinIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Company',
		links: [
			{ title: 'About Us', href: '#about' },
			{ title: 'Services', href: '#services' },
			{ title: 'Contact', href: '#contact' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Privacy Policy', href: '/privacy' },
			{ title: 'Terms of Service', href: '/terms' },
		],
	},
	{
		label: 'Connect',
		links: [
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
			{ title: 'Twitter', href: '#', icon: FrameIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-4 py-6 md:px-6 md:py-12 lg:py-16 mt-12 md:mt-24 z-10">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-4 md:gap-8 xl:grid-cols-2 xl:gap-8">
				<AnimatedContainer className="space-y-2 md:space-y-4">
					<div className="flex items-center space-x-2">
						<div className="h-8 w-8 flex items-center justify-center">
							<Image
								src="/droxa-logo.png" 
								alt="Droxa Automation Logo" 
								width={32}
								height={32}
								className="h-8 w-8 object-contain"
							/>
						</div>
						<span className="text-xl font-bold">Droxa Automation</span>
					</div>
					<p className="text-muted-foreground mt-3 text-xs md:text-sm md:mt-4 max-w-sm hidden md:block">
						Transform your business with cutting-edge automation solutions. Streamline operations, reduce costs, and boost productivity.
					</p>
					<p className="text-muted-foreground mt-3 text-xs md:text-sm md:mt-4">
						© {new Date().getFullYear()} Droxa Automation. All rights reserved.
					</p>
				</AnimatedContainer>

				<AnimatedContainer className="mt-4 md:mt-10 xl:mt-0">
					<div className="flex justify-center md:justify-end">
						<div className="grid grid-cols-3 gap-4 md:gap-8 md:grid-cols-3 max-w-md text-center md:text-left">
							{footerLinks.map((section, index) => (
								<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
									<div className="mb-6 md:mb-0">
										<h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">{section.label}</h3>
										<ul className="text-muted-foreground mt-1 md:mt-4 space-y-1 md:space-y-2 text-xs md:text-sm">
											{section.links.map((link) => (
												<li key={link.title}>
													<a
														href={link.href}
														className="hover:text-foreground inline-flex items-center transition-all duration-300 hover:translate-x-1"
													>
														{link.icon && <link.icon className="me-1 size-4" />}
														{link.title}
													</a>
												</li>
										))}
										</ul>
									</div>
								</AnimatedContainer>
						))}
						</div>
					</div>
				</AnimatedContainer>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
