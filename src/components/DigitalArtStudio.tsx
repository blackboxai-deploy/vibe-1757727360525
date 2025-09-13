'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface DigitalArtStudioProps {
  onBack: () => void;
  userProfile: any;
}

export default function DigitalArtStudio({ onBack }: DigitalArtStudioProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl p-8 bg-gray-900/95 backdrop-blur-sm border-green-700">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-7xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
              DIGITAL ART STUDIO
            </h1>
            <h2 className="text-3xl font-bold text-white">
              Coming Soon!
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional digital art creation with advanced tools and features. 
              Create masterpieces and download your artwork for free!
            </p>
          </div>

          <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Planned Features</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Drawing Tools</h4>
                <ul className="space-y-1">
                  <li>• Multiple brush types</li>
                  <li>• Shape tools</li>
                  <li>• Layer system</li>
                  <li>• Color picker</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Export Options</h4>
                <ul className="space-y-1">
                  <li>• PNG download</li>
                  <li>• SVG vector export</li>
                  <li>• PDF creation</li>
                  <li>• Shareable links</li>
                </ul>
              </div>
            </div>
          </div>

          <Button 
            onClick={onBack}
            variant="outline"
            className="border-green-600 text-green-300 hover:bg-green-800"
          >
            ← Back to Game Hub
          </Button>
        </div>
      </Card>
    </div>
  );
}