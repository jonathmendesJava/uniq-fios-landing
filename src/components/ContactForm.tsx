
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});
  const [fieldSuccess, setFieldSuccess] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Validação em tempo real
    const isValid = validateField(field, value);
    setFieldErrors(prev => ({ ...prev, [field]: !isValid }));
    setFieldSuccess(prev => ({ ...prev, [field]: isValid && value.length > 0 }));
  };

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "nome":
        return value.length >= 2;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "telefone":
        return /^[\d\s\-\(\)]{10,}$/.test(value.replace(/\D/g, ''));
      default:
        return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar todos os campos
    const errors: Record<string, boolean> = {};
    Object.entries(formData).forEach(([field, value]) => {
      errors[field] = !validateField(field, value);
    });
    
    setFieldErrors(errors);
    
    if (Object.values(errors).some(hasError => hasError)) {
      toast({
        title: "Erro de validação",
        description: "Por favor, preencha todos os campos corretamente.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch("https://hook.us1.make.com/3yqzgv66wckwxgteylibgkxcec93nqfp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "Seus dados foram enviados. Nossa equipe entrará em contato em breve!",
        });
        setFormData({ nome: "", email: "", telefone: "" });
        setFieldSuccess({});
      } else {
        throw new Error("Erro no envio");
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass rounded-3xl p-6 md:p-8 border border-uniq-light/30 hover:border-uniq-neon/50 transition-all duration-500 group">
      {/* Holographic corner */}
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-uniq-neon rounded-tr-lg animate-neon-pulse"></div>
      
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white text-glow mb-2">
          Fale com nossa <span className="text-uniq-neon">equipe</span>
        </h3>
        <p className="text-dark-200">
          Preencha o formulário e nossa equipe comercial entrará em contato
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo Nome */}
        <div className="space-y-2">
          <Label htmlFor="nome" className="text-white font-medium">
            Nome completo
          </Label>
          <div className="relative group/field">
            <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
              fieldSuccess.nome ? 'text-green-400 animate-icon-bounce' : 
              fieldErrors.nome ? 'text-red-400 animate-icon-shake' : 
              'text-uniq-light group-focus-within/field:text-uniq-neon group-focus-within/field:animate-icon-glow'
            }`}>
              {fieldSuccess.nome ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <User className="w-5 h-5" />
              )}
            </div>
            <Input
              id="nome"
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
              className={`pl-12 h-12 md:h-14 glass-hover border-uniq-light/30 focus:border-uniq-neon bg-dark-800/50 text-white placeholder:text-dark-300 transition-all duration-300 ${
                fieldErrors.nome ? 'border-red-400 focus:border-red-400' : ''
              }`}
              required
            />
          </div>
        </div>

        {/* Campo Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white font-medium">
            E-mail
          </Label>
          <div className="relative group/field">
            <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
              fieldSuccess.email ? 'text-green-400 animate-icon-bounce' : 
              fieldErrors.email ? 'text-red-400 animate-icon-shake' : 
              'text-uniq-light group-focus-within/field:text-uniq-neon group-focus-within/field:animate-icon-glow'
            }`}>
              {fieldSuccess.email ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <Mail className="w-5 h-5" />
              )}
            </div>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`pl-12 h-12 md:h-14 glass-hover border-uniq-light/30 focus:border-uniq-neon bg-dark-800/50 text-white placeholder:text-dark-300 transition-all duration-300 ${
                fieldErrors.email ? 'border-red-400 focus:border-red-400' : ''
              }`}
              required
            />
          </div>
        </div>

        {/* Campo Telefone */}
        <div className="space-y-2">
          <Label htmlFor="telefone" className="text-white font-medium">
            Telefone
          </Label>
          <div className="relative group/field">
            <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
              fieldSuccess.telefone ? 'text-green-400 animate-icon-bounce' : 
              fieldErrors.telefone ? 'text-red-400 animate-icon-shake' : 
              'text-uniq-light group-focus-within/field:text-uniq-neon group-focus-within/field:animate-icon-glow'
            }`}>
              {fieldSuccess.telefone ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <Phone className="w-5 h-5" />
              )}
            </div>
            <Input
              id="telefone"
              type="tel"
              placeholder="Digite seu telefone"
              value={formData.telefone}
              onChange={(e) => handleInputChange("telefone", e.target.value)}
              className={`pl-12 h-12 md:h-14 glass-hover border-uniq-light/30 focus:border-uniq-neon bg-dark-800/50 text-white placeholder:text-dark-300 transition-all duration-300 ${
                fieldErrors.telefone ? 'border-red-400 focus:border-red-400' : ''
              }`}
              required
            />
          </div>
        </div>

        {/* Botão Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 md:h-14 btn-neon border-neon hover:border-neon-hover text-white font-semibold text-base transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <div className="flex items-center justify-center space-x-2">
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                <span>Solicitar Contato</span>
              </>
            )}
          </div>
        </Button>
      </form>

      {/* Scanning line effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-uniq-neon to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line"></div>
    </div>
  );
};

export default ContactForm;
