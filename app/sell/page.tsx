import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SellPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Sell Your Prompt</h1>
        
        <form className="bg-white shadow-md rounded-lg p-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <Input id="title" placeholder="Enter your prompt title" className="mt-1" />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <Textarea id="description" placeholder="Describe your prompt" className="mt-1" />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <Select>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="writing">Writing</SelectItem>
                  <SelectItem value="coding">Coding</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price ($)</label>
              <Input id="price" type="number" placeholder="0.00" className="mt-1" />
            </div>
            
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">Prompt Content</label>
              <Textarea id="prompt" placeholder="Enter your prompt content" className="mt-1" rows={6} />
            </div>
            
            <Button type="submit" className="w-full">List Prompt for Sale</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

